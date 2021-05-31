import {Form,Button,Row,option,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const SignUp = ()=>{
    return(
        <div>
            <Form style={{padding:"10px"}}>
                <Form.Group  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your email" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Your Password" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                  <br/>
                <h6>Already have an account? <b>
                    <Link to = "/login">login</Link>
                    </b>
                    </h6>
            </Form>
        </div>
    )
}

export default SignUp