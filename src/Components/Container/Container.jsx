
import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className='max-w-screen-xl mx-auto  md:px-10 sm:px-2 px-5'>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node
};