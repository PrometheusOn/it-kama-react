import Nav from "./Nav";
import { connect } from "react-redux";

const MapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList
    }   
}
const NavContainer = connect(MapStateToProps)(Nav)

export default NavContainer