import {useEffect} from "react"
import { Link, navigate } from "gatsby"

export default () => {
	useEffect(() => {
		navigate('/home/');
	}, []);
	return null;
};
