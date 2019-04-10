/**
 * Exemplo da Screen1 possibilitando o acesso ao Screen2 através de um botão
 */
import React, { Component } from 'react';

import { Button } from 'native-base';

export default class Screen1 extends Component {
  render() {
    return (
        <Button
            transparent
            dark
            onPress={
                () => this.props.navigation.push('Screen2', {})
            }
        >
            Button
        </Button>
    );
  }
}
