import ArrowLeft from "../icons/Arrow-Left";
import Logo from "./Logo";
import HeaderNavs from "./Header-Navs";
import HeaderButton from "./Header-Buttons";

function ResponsiveHeader(props){
 
    return (
        <div className="container mobile-header d-align-center d-justify-space-between ">
            <div className="col-m-1 mt-m-2 mb-1 d-mm-none">
                <ArrowLeft color="#003D41"></ArrowLeft>
            </div>
            <div className="col-ml-2">
                <Logo type="0" value="RideHire"></Logo>
            </div>
            <div className="col-ml-10 mt-m-2 mb-1">
                <HeaderNavs show={props.show} handler={props.handler}></HeaderNavs>
            </div>
            
        </div>
    )
}

export default ResponsiveHeader;