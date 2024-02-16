import './App.css';
import styled, {keyframes} from 'styled-components';


const Navigation = () => {
    return (
        <nav>
          <Menu role='menu'>
            <MenuItem role='menuitem'><a href=" ">Item 1</a></MenuItem>
            <MenuItem role='menuitem'><a href=" ">Item 2</a></MenuItem>
            <MenuItem role='menuitem'><a href=" ">Item 3</a></MenuItem>
        </Menu>
        </nav>
    );
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation/>
                <LoginBtn accessKey='' aria-label='закрыть'>X</LoginBtn>
            </Header>
            <Block>
                <Title>Accessibility</Title>
                <Form>
                    <div>
                        <Label htmlFor="1">Label for field 1</Label>
                        <Field tabIndex={2} id="1" placeholder="Field 1"/>
                    </div>

                    <div>
                        <Label htmlFor="2">Label for field 2</Label>
                        <Field tabIndex={3} id="2" placeholder="Field 2"/>
                    </div>

                    <div>
                        <Label htmlFor="3">Label for field 3</Label>
                        <Field tabIndex={1} id="3" placeholder="Field 3"/>
                    </div>
                </Form>
            </Block>
        </div>
    );
}

export default App;


const Bouncing = keyframes`
  50% {
    transform: translateY(20%);
  }  
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 60px 0;
  animation: ${Bouncing} 1s linear infinite alternate;

  @media (prefers-reduced-motion: reduce) {
   animation: none;
  }
`;

const Header = styled.header`
  height: 80px;
  background-color: #e91e63;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

const MenuItem = styled.li`
  a{
     color: white;
  font-weight: bold;
  text-decoration: none;
  }
`;

const LoginBtn = styled.button`
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 5px;
  background-color: transparent;
`;

const Block = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Label = styled.label`
  font-size: 1rem;
  line-height: 2rem;
`;

const Field = styled.input`
  padding: 5px 15px;
  width: 100%;
  font-size: 1rem;
`;




