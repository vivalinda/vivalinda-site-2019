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
      isSubmitted: false
    }
   
    this.handleData = this.handleData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState( { template_params: {...this.state.template_params,  [ e.target.name ]: e.target.value} } );
  } 

  handleData(event) {
    event.preventDefault();
    (function(){
      window.emailjs.init("user_kA2kM7oBsmwwAP2BFgBsq");
    })();
    window.emailjs.send("default_service","template_mUz5l4x1_clone", this.state.template_params);
    this.handleFormStatus()
  }

  handleFormStatus(){
    setTimeout(() => {
      this.setState( { 
        isSubmitted: !this.isSubmitted
      })
    }, 500);
  }

 render() {
  return (
    <div className="parceriasContainer">
      {
        this.state.isSubmitted 
          ? <FormSentMsg params={ this.state.template_params } />
          : <FormParceria params={ this.state.template_params  } onChange={ this.handleChange } onClick={ this.handleData } />
      }
    </div>
  );
 }
}

const FormSentMsg = ( props ) => {
  return(
    <div  className="formMargin">
      <h6>{ props.params.name },</h6>
      <h6>Agradecemos o interesse em fazer uma parceria conosco</h6>
      <p>Entraremos em contato com uma resposta</p>
    </div>
  )
}

const FormParceria = ( props ) => {
  return(
    <>
      <h4>Interessada em ser nossa Parceira?</h4>
      <h6>Preencha o Formulário abaixo que entraremos em contato</h6>
      <Form>
          <InputParceira type="text" name="name" id="nomeParceira" placeholder="Nome" value={ props.params.name } onChange={ props.onChange } />
          <InputParceira type="text" name="instagram" id="instagramParceira" placeholder="@seuinstagram" value={ props.params.instagram} onChange={ props.onChange } />
          <InputParceira type="text" name="otherSocial" id="otherSocialParceira" placeholder="Outras Mídias" value={ props.params.otherSocial } onChange={  props.onChange } />
          <InputParceira type="textarea" name="message" id="messageParceira" placeholder="Como essa parceria pode ser benéfica para as partes e o que você espera dela?"  value={ props.params.message } onChange={  props.onChange } />
          <InputParceira type="text" name="contato" id="contatoParceira" placeholder="Contato"  value={ props.params.contato } onChange={  props.onChange } />
          <Button onClick={ props.onClick } block>Enviar</Button>
        </Form>
      </>
  )
}

const InputParceira = ( props ) => {
  return (
    <FormGroup>
      <Input type={ props.type }  name={ props.name }  id={ props.id } placeholder={ props.placeholder } value={ props.value } onChange={ props.onChange } />
    </FormGroup>
  )
}
