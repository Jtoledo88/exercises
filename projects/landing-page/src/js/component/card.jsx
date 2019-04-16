import React from "react";

export class Card extends React.Component {
	render() {
		const Card = props => {
			let Card = props.info.map((info, i) => {
				return (
					<div key={i} className="col-md-3">
						<div className="card">
							<img
								src={info.imageCard}
								className="card-img-top"
								alt="image not load"
							/>
							<div className="card-body">
								<h5 className="card-title">{info.title}</h5>
								<p className="card-text">{info.description}</p>
								<a
									href={info.buttonUrl}
									className="btn btn-primary">
									{info.buttonLabel}
								</a>
							</div>
						</div>
					</div>
				);
			});

			return Card;
		};

		let info = [
			{
				id: 1,
				title: "Bob Dylan",
				description:
					"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
				buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
				imageCard: "https://via.placeholder.com/500x325",
				buttonLabel: "Go to somewhere"
			},
			{
				id: 2,
				title: "Paul Maccartey",
				description:
					"Paul Maccartey is an American singer-songwriter.Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, ",
				buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
				imageCard: "https://via.placeholder.com/500x325",
				buttonLabel: "Go to Right"
			},
			{
				id: 3,
				title: "Paul Dylan",
				description:
					"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author,  Bob Dylan is an American singer-songwriter.",
				buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
				imageCard: "https://via.placeholder.com/500x325",
				buttonLabel: "Go to somewhere"
			},
			{
				id: 4,
				title: "Bob Maccartey",
				description:
					"Paul Maccartey is an American Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author,  singer-songwriter.",
				buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
				imageCard: "https://via.placeholder.com/500x325",
				buttonLabel: "Go to Right"
			}
		];
		return (
			<div className="container">
				<div className="row">
					<Card info={info} />
				</div>
			</div>
		);
	}
}
