var Test = React.createClass({
    render: function(){
        return(
            <h1 className="mauxanh">Khóa học Reactjs</h1>
        );
    }
});

ReactDOM.render(
    <div>
        <Test />
    </div>,
    document.getElementById('root')
  );