import React, { Component } from "react";
import {
	Container,
	Form,
	Field,
	Item,
	Header,
	Input,
	Button,
	TextArea,
	Modal,
	Label
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import axios from "axios";

import { save_actualCause, save_insight } from "../actions/Insight_Actions";

class BInsight extends Component {
	constructor(props) {
		super(props);
		this.DBSave = this.DBSave.bind(this);
	}

	DBSave() {
		// 	axios
		// 		.post("/insight/insert", {
		// 			situation: this.props.situation,
		// 			apparentCause: this.props.apparentCause,
		// 			actualCause: this.props.actualCause,
		// 			insight: this.props.insight
		// 		})
		// 		.then(response => {
		// 			console.log(response);
		// 		})
		// 		.catch(function(error) {
		// 			console.log("Something Failed");
		// 		});
		// 	this.props.reset_all;
	}

	render() {
		return (
			<Container text>
				<Form onSubmit={this.DBSave}>
					<Label
						size="big"
						color="olive"
						style={{ marginBottom: "10px" }}
					>
						Actual root cause
					</Label>
					<Form.Field
						control={TextArea}
						autoHeight
						rows={3}
						name="actualCause"
						onChange={this.props.save_actualCause}
						value={this.props.actualCause}
					/>

					<Label
						size="big"
						color="teal"
						style={{ marginBottom: "10px" }}
					>
						What I learned today.
					</Label>
					<Form.Field
						control={TextArea}
						autoHeight
						rows={3}
						name="insight"
						onChange={this.props.save_insight}
						value={this.props.insight}
					/>

					<Button.Group fluid style={{ marginTop: "50px" }}>
						<Button
							as={Link}
							exact="true"
							to="/"
							content="Previous Page"
							size="large"
							color="blue"
						/>
						<br />
						<Button content="Save" size="large" positive />
					</Button.Group>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	situation: state.Insight.situation,
	apparentCause: state.Insight.apparentCause,
	actualCause: state.Insight.actualCause,
	insight: state.Insight.insight
});

const mapDispatchToProps = dispatch => ({
	save_actualCause: e => {
		dispatch(save_actualCause(e.target.value));
	},
	save_insight: e => {
		dispatch(save_insight(e.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(BInsight);
