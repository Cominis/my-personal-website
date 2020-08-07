import React, { Component } from 'react';
import css from './Contact.module.css';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Contact extends Component {
    state = {
        orderForm: {
            // name: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'text',
            //         placeholder: 'Your Name'
            //     },
            //     value: '',
            //     validation: {
            //         required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: false
                },
                valid: false,
                touched: false
            },
            // deliveryMethod: {
            //   elementType: 'select',
            //   elementConfig: {
            //     options: [
            //       { value: 'fastest', displayValue: 'Fastest' },
            //       { value: 'cheapest', displayValue: 'Cheapest' }
            //     ]
            //   },
            //   value: '',
            //   validation: {},
            //   valid: true
            // }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^(\+)?\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button type='Primary'>Send</Button>
            </form>
        );

        return (
            <React.Fragment>
                <div className={css.parallax2}>
                    <h2 className={css.divider}>contact Me</h2>
                    <div className={css.ContactData}>
                        {form}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;