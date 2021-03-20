import React, { FunctionComponent, useEffect, useState } from 'react';


interface TypeWriterProps {
	words: string[];
}

const TYPE_SPEED = 100;
const WORD_OFFSET = TYPE_SPEED * 16;

const TypeWriter: FunctionComponent<TypeWriterProps> = ({ words }) => {
	const [current, setCurrent] = useState(0);
	const [displayed, setDisplayed] = useState('');

	useEffect(() => {
		let pos = 0;
		let timeout: any;

		const word = words[current];
		const interval = setInterval(() => {
			const nextWord = () => {
				timeout = setTimeout(() => {
					const next = current + 1;
					setDisplayed('');
					setCurrent(next < words.length ? next : 0);
				}, WORD_OFFSET);
			};

			if (pos > word.length) {
				nextWord();
				clearInterval(interval);
				return;
			}

			setDisplayed(word.substr(0, pos));
			pos += 1;
		}, TYPE_SPEED);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [current]);

	return (
		<>{displayed}</>
	);
}

export default TypeWriter;
