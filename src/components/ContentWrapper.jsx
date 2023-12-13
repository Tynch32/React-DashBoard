import { ContentRowTop } from "./ContentRowTop"
import { Footer } from "./Footer"
import { TobBar } from "./TobBar"

export const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TobBar/>
                <ContentRowTop/>
            </div>
                <Footer/>
        </div>

    )
}
