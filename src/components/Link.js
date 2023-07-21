import useNavigation from "../hooks/use-navigation";


function Link({to, children, className}) {
	const { path, navigate } = useNavigation();

	const handle = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		navigate(to);
	}
	return (
    <a href={to} onClick={handle} className={`${className} ${path === to? 'active': ''}`}>
      {children}
    </a>
  );
}

export default Link