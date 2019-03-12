import React from 'react';
import './Parcerias.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class Parcerias extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      template_params : {
        name: "",
        instagram: "",
        otherSocial: "",
        message: "",
        contato: ""
      },
      submited: false
    }
   
    this.handleData = this.handleData.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleOtherSocial = this.handleOtherSocial.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleContato = this.handleContato.bind(this);
  }

  handleName(event) {
    this.setState( { template_params: {...this.state.template_params,  name: event.target.value} } );
  } 

  handleInstagram(event) {
    this.setState( { template_params: {...this.state.template_params,  instagram: event.target.value} } );
  } 

  handleOtherSocial(event) {
    this.setState( { template_params: {...this.state.template_params,  otherSocial: event.target.value} } );
  }

  handleMessage( event ) {
    this.setState( { template_params: {...this.state.template_params,  message: event.target.value} } );
  }
  handleContato( event ) {
    this.setState( { template_params: {...this.state.template_params,  contato: event.target.value} } );
  }

  handleData(event) {
    event.preventDefault();
    (function(){
      window.emailjs.init("user_kA2kM7oBsmwwAP2BFgBsq");
    })();
    window.emailjs.send("default_service","template_mUz5l4x1_clone", this.state.template_params);
    this.setState( { template_params: {
      name: "",
      instagram: "",
      otherSocial: "",
      message: "",
      contato: ""
    }})
    this.setState( {
      submited: true
    })
  }

  
 render() {
    
  return (
    <div className="parceriasContainer">
      <h4>Interessada em ser nossa Parceira?</h4>
      <h6>Preencha o Formulário abaixo que entraremos em contato</h6>
      <Form>
        <FormGroup>
          <Input type="text"  id="nomeParceira" placeholder="Nome" value={ this.state.template_params.name } onChange={ this.handleName } />
        </FormGroup>
        <FormGroup>
          <Input type="text"  id="instagramParceira" placeholder="@seuinstagram" value={ this.state.template_params.instagram } onChange={ this.handleInstagram } />
        </FormGroup>
        <FormGroup>
          <Input type="text"  id="otherSocialParceira" placeholder="Outras Mídias" value={ this.state.template_params.otherSocial } onChange={ this.handleOtherSocial } />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" id="messageParceira" placeholder="Como essa parceria pode ser benéfica para as partes e o que você espera dela?"  value={ this.state.template_params.message } onChange={ this.handleMessage } />
        </FormGroup>
        <FormGroup>
          <Input type="text" id="contatoParceira" placeholder="Contato"  value={ this.state.template_params.contato } onChange={ this.handleContato } />
        </FormGroup>
        <Button onClick={ this.handleData } block>Enviar</Button>
      </Form>
    </div>
  );
 }
}