import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as LayoutAntd } from 'antd'
import Table from "../features/Table/components/Table.tsx";

const { Content, Sider } = LayoutAntd

function LayoutMain() {
	const resizableRef = React.useRef(null)

	return (
		<LayoutAntd>
			<Content>
				<LayoutAntd className='site-layout-background'>
					<Sider
						ref={resizableRef}
						id='Resizable'
						className='site-layout-background'
						width='30%'
						background={'#ffff'}
					>
						<Table />
					</Sider>
					<Content style={{ minHeight: 280 }}>
						<Outlet />
					</Content>
				</LayoutAntd>
			</Content>
		</LayoutAntd>
	)
}

export default LayoutMain
