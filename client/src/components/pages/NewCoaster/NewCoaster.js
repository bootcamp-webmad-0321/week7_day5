import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CoastersService from '../../../service/coasters.service'

class NewCoaster extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            length: 0,
            inversions: 0,
            imageUrl: ''
        }

        this.coasterService = new CoastersService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {

        e.preventDefault()

        this.coasterService
            .createCoaster(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshCoasters()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="title">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={e => this.handleInputChange(e)} name="title" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>

                <Form.Group controlId="length">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="number" value={this.state.length} onChange={e => this.handleInputChange(e)} name="length" />
                </Form.Group>


                <Form.Group controlId="inversions">
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" value={this.state.inversions} onChange={e => this.handleInputChange(e)} name="inversions" />
                </Form.Group>

                <Form.Group controlId="imageUrl">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} name="imageUrl" />
                    <Form.Text className="text-muted">Sin caracteres especiales</Form.Text>
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit">Crear montaña rusa</Button>
            </Form>
        )
    }
}

export default NewCoaster