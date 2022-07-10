import React, { Suspense,lazy} from "react";
const LazyLoading = lazy(() => import('./LazyLoading'))

class LazyLoadTest extends React.Component {
    render(){
        return(
            <div>
                <Suspense fallback={"Please wait loading..."}>
                     Lazy Home
                    <LazyLoading/>
                 </Suspense>
            </div>
        )
    }
}

export default LazyLoadTest;