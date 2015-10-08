var Key = React.createClass({
  handlechange: function () {
    if (KeyStore.all().indexOf(this.props.note) !== -1){
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentDidMount: function(){
    this.note = new Note(Tones[this.props.note]);
    KeyStore.addChangeHandler(this.handlechange);
  },

  render: function() {
    return <div />
  }

});
