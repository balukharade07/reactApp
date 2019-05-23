import React, { Component } from "react";
import Massage from "./Messages";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_CONTACTS } from "../action/types";

class Profile extends Component {
	componentDidMount() {
		this.props.getConatcts();
	}

	render() {
		const { contacts } = this.props;
		return (
			<div className="row">
				<Massage boxdata={contacts} />
			</div>
		);
	}
}
Profile.propTypes = {
	contacts: PropTypes.array.isRequired,
	getConatcts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

const mapDispatchToProps = dispatch => ({
	getConatcts: () => dispatch({ type: GET_CONTACTS })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
