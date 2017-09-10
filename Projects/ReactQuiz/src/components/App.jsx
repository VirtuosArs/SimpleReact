import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx'
import Scorebox from './quiz/Scorebox.jsx'
import Results from './quiz/Results.jsx'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is the capital of India?',
					choices: [
						{
							id: 'a',
							text: 'Maharashtra'
						},
						{
							id: 'b',
							text: 'Delhi'
						},
						{
							id: 'c',
							text: 'Kolkata'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is 2 + 2?',
					choices: [
						{
							id: 'a',
							text: '2'
						},
						{
							id: 'b',
							text: '6'
						},
						{
							id: 'c',
							text: '4'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is 10 * 10?',
					choices: [
						{
							id: 'a',
							text: '200'
						},
						{
							id: 'b',
							text: '10'
						},
						{
							id: 'c',
							text: '100'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'Who is Sachin Tendulkar?',
					choices: [
						{
							id: 'a',
							text: 'Cricketer'
						},
						{
							id: 'b',
							text: 'Politician'
						},
						{
							id: 'c',
							text: 'Actor'
						}
					],
					correct: 'a'
				}
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		if(this.state.current > this.state.questions.length){
			var scorebox = '';
			var results = <Results {...this.state} />
		} else {
			var scorebox = <Scorebox {...this.state} />
			var results = '';
		}
		return(
			<div>
				{scorebox}
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
				{results}
			</div>
		)
	}
}

export default App