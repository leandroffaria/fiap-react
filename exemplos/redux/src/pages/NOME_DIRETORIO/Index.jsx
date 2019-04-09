/** 
* Precisa ser mantido tudo que já estava importado.
* Por exemplo: React
*/
import { connect } from 'react-redux'
import { test } from './actions';

const mapStateToProps = state => ({
    test: state.[NOME].test,
});

const mapDispatchToProps = dispatch => ({
    onTest: () => test(dispatch),
});

[...]
/**
 * Aqui no Miolo mantemos todo o conteudo da Classe.
 */
[...]

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )([NOME_DA_SUA_CLASSE]);