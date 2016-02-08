
var React = require('react');
var ListItem = require('./ListItem.jsx');

var employees = [{"id":1,"text":"Jesper"}, {"id":2,"text":"Ted"},{"id":3,"text":"Julie"}];
var List = React.createClass({
    render: function() {
        var listItems = employees.map(function(item) {
            return <ListItem key={item.id} employee={item.text} />;
        });
        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;