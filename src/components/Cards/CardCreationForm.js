import React, {Component} from 'react';



class CardCreationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {title: '', imgPath: '', price: ''},
            errors: {},
        }

        this.handleCreateCard = this.handleCreateCard.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(e){
        const {name, value} = e.target;
        const {fields} = this.state;
        fields[name] = value;
        this.setState(
            {fields},
        );
    }

    validateField() {
        let formValid = true;
        let errors = {};
        let {fields} = this.state;
        if (!fields.title){
            formValid = false;
            errors['title'] = 'Can not be empty'      
        }
        if (!fields.price){
            formValid = false;
            errors['price'] = 'Can not be empty'      
        }
        if (!fields.imgPath){
            formValid = false;
            errors['imgPath'] = 'Can not be empty'      
        }
        this.setState({errors});
        return formValid;
      }
      
      onSubmit(e) {
        let {fields} = this.state;
        e.preventDefault();
        if(this.validateField()){
            this.handleCreateCard(fields);
        }
      }

    handleCreateCard(fields){
        const { createCard } = this.props;
        this.setState({fields}, () => {createCard({fields})})
    }
    
    render(){
        const {fields: {price, title, imgPath}} = this.state;
        return(
            <div className = 'form'>
                <form onSubmit= {this.onSubmit.bind(this)}>
                    <label>
                        Price
                        <input name = 'price' value = {price} onChange = {this.handleChangeInput}/>
                        <span className="error">{this.state.errors['price']}</span>
                    </label>
                    <label>
                        Title
                        <input name = 'title' value = {title} onChange = {this.handleChangeInput}/>
                        <span className="error">{this.state.errors['title']}</span>
                    </label>
                    <label>
                        Image path
                        <input name = 'imgPath' value = {imgPath} onChange = {this.handleChangeInput}/>
                        <span className="error">{this.state.errors['imgPath']}</span>
                    </label>
                <button>Add card</button>
                </form>
            </div>
        )
    }
}

export default CardCreationForm;