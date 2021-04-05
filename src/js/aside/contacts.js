import React from 'react';

class Contacts extends React.Component {
    render() {
        const contact = this.props.contactInfo;
        const contactIcon = this.props.contactIcons;
        return (
            <li>{contactIcon}{contact}</li>
        )
    }
}

export default Contacts;