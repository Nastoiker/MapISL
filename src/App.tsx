
import {MapComponent} from "./features/Map/Component/Map.tsx";
import {useAppSelector} from "./services/hooks/ReduxHooks/useAppSelector.ts";
import {routeLoading, routeLoadingError} from "./features/routeSaga/routerSlice.ts";

export function App() {
    const loadingError = useAppSelector(routeLoadingError)

    if (loadingError) return <div>ошибка</div>
    return <section>
        <MapComponent />
    </section>
}

export default App
