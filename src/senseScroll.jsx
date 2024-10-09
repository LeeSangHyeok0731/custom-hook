import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.div`
    position:fixed;
`

const ChangeColor = styled.div`
    width:100px;
    height:100px;
    background-color: ${(props) => (props.backgroundColor ? 'tomato' : 'skyblue')};;
`

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        
        // cleanup
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

// 컴포넌트에서 커스텀 훅 사용
function MyComponent() {
    const [backgroundColor, setBackgroundColor] = useState(false);
    const scrollPosition = useScrollPosition();
    useEffect(() => {
        if (scrollPosition >= 100 && !backgroundColor) {
            setBackgroundColor(true);
        } else if (scrollPosition < 100 && backgroundColor) {
            setBackgroundColor(false);
        }
    }, [scrollPosition])

    return (
        <div>
        <Header>
            Scroll Position: {scrollPosition}px
            <ChangeColor backgroundColor={backgroundColor}  />
        </Header>
        </div>
    );
}

export default MyComponent;