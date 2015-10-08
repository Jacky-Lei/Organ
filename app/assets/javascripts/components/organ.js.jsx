var Organ = React.createClass({
  render: function() {
    var t = window.Tones;
    var tarray = [
          'C4',
          'Cs',
          'D4',
          'Ds',
          'E4',
          'F4',
          'Fs',
          'G4',
          'Gs',
          'A4',
          'As',
          'B4',
          'C5'
        ];


    return (<div>
      {
        tarray.map(function (el) {
          return <Key note={el} />
        })
      }
    </div>);
  }
});

$(function () {
  React.render(
    // <Key note={NoteName}/>,
    <Organ />,
    document.getElementById('content')
  );
});
