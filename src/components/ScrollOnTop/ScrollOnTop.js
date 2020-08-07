import { useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
    useLayoutEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);