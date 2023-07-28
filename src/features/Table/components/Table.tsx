
import { useEffect, useState } from 'react'
import {useAppSelector} from "../../../services/hooks/ReduxHooks/useAppSelector.ts";
import {routerActions} from "../../routeSaga/routerSlice.ts";
import {requestListActions, selectListRequests} from "../../requestListSaga/requestListSlice.ts";
import {Select, Table as TableAntd} from 'antd';
import {useAppDispatch} from "../../../services/hooks/ReduxHooks/useAppDispatch.ts";
export const Table = () => {
    const dispatch = useAppDispatch()
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const requests = useAppSelector(selectListRequests)

    useEffect(() => {
        dispatch(requestListActions.fetchRequestList())
    }, [dispatch])

    const handleChange = (value, type, recordId) => {
        const newPoint = value.split(',').map(c => +c)
        const findRequest = requests.find(r => r.key === recordId)
        const newRoutePoints =
            type === 'destination'
                ? {
                    original: findRequest.original,
                    space: findRequest.space,
                    destination: newPoint
                }
                : {
                    original: newPoint,
                    space: findRequest.space,
                    destination: findRequest.destination
                }

        dispatch(routerActions.fetchRoute(newRoutePoints))
    }

    const columns = [
        {
            title: 'Погрузка',
            dataIndex: 'original',
        },
        {
            title: 'Разгрузка 1',
            dataIndex: 'space',
        },
        {
            title: 'Разгрузка 2',
            dataIndex: 'destination',
        }
    ];

    return (
        <TableAntd
            onRow={(record, index) => {
                return {
                    onClick: () => {
                        dispatch(
                            routerActions.fetchRoute({
                                original: record.original,
                                space: record.space,
                                destination: record.destination
                            })
                        )
                        setSelectedRowKeys([index + ''])
                    }
                }
            }}
            rowSelection={{ selectedRowKeys }}
            columns={columns}
            dataSource={requests}
        ></TableAntd>
    )
}

export default Table