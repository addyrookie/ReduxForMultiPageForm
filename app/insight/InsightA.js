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

import {
	save_situation,
	save_apparentCause,
	reset_all
} from "../actions/Insight_Actions";

class InsightA extends Component {
	render() {
		return (
			<Container text>
				<Form>
					<Label
						size="big"
						color="olive"
						style={{ marginBottom: "10px" }}
					>
						What happened?
					</Label>
					<Form.Field
						control={TextArea}
						autoHeight
						rows={3}
						name="situation"
						onChange={this.props.save_situation}
						value={this.props.situation}
					/>
					<Label
						size="big"
						color="teal"
						inverted
						style={{ marginBottom: "10px" }}
					>
						What you believed was the cause
					</Label>
					<Form.Field
						control={TextArea}
						autoHeight
						rows={3}
						name="apparentCause"
						onChange={this.props.save_apparentCause}
						value={this.props.apparentCause}
					/>
					<Button.Group fluid style={{ marginTop: "50px" }}>
						<Button
							content="Reset Everything"
							size="large"
							color="grey"
							onClick={this.props.reset_all}
						/>
						<br />

						<Button
							as={Link}
							to="/insightb"
							content="Next Page"
							size="large"
							color="blue"
						/>
					</Button.Group>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	situation: state.Insight.situation,
	apparentCause: state.Insight.apparentCause
});

const mapDispatchToProps = dispatch => ({
	save_situation: e => {
		dispatch(save_situation(e.target.value));
	},
	save_apparentCause: e => {
		dispatch(save_apparentCause(e.target.value));
	},
	reset_all: () => {
		dispatch(reset_all());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(InsightA);
