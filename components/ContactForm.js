var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className='contactForm'>
        <input type='text' placeholder='Imię' defaultValue={this.props.contact.firstName}/>
        <input type='text' placeholder='Nazwisko' defaultValue={this.props.contact.lastName}/>
        <input type='email' placeholder='Email' defaultValue={this.props.contact.email}/>
        <button type='submit'>Dodaj kontakt</button>
      </form>
    );
  }
})