import Logo from "./Logo";
import HeaderNavs from "./Header-Navs";
import HeaderButton from "./Header-Buttons";


function Header(props){
    return(
        <div className="desktop-header container pt-1 pb-2 pt-m-2 d-flex d-align-center d-justify-space-between offset-1">
            <Logo type="0" value="RideHire"></Logo>
            <HeaderNavs show={props.show} handler={props.handler}></HeaderNavs>
            <HeaderButton></HeaderButton><br></br>
            
        </div>
        
        
    )
}

export default Header;