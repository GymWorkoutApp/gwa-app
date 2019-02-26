import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    LayoutAnimation,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';
import If from 'jsx-control-statements';
import {
    CNPJ_VALID_REGEX,
    CPF_VALID_REGEX,
    EMAIL_VALID_REGEX,
    NUMBER_VALID_REGEX,
    PASSWORD_VALID_REGEX
} from "../../utils/constants";
import Input from "../input";
import InputMask from "../inputMask";


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const USER_GYM = require('../../assets/images/user-gym.png');
const USER_STUDENT = require('../../assets/images/user-student.png');
const USER_TEACHER = require('../../assets/images/user-teacher.png');
const EMAIL_OUTLINE  = require('../../assets/images/email-outline.png');
const EMAIL_OUTLINE_CHECK  = require('../../assets/images/email-outline-check.png');
const BUSINESS  = require('../../assets/images/business.png');
const ID  = require('../../assets/images/id.png');
const USER  = require('../../assets/images/user.png');
const USER_VALID = require('../../assets/images/user-valid.png');
const PADLOCK_CLOSE = require('../../assets/images/padlock-close.png');
const PADLOCK_OPEN = require('../../assets/images/padlock-open.png');
const EYE_BLACK = require('../../assets/images/eye-black.png');
const NAME = require('../../assets/images/name.png');
const HEIGHT = require('../../assets/images/height.png');
const WEIGHT = require('../../assets/images/weight.png');

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
            emailValid: false,
            passwordValid: false,
            nameValid: false,
            cnpjValid: false,
            cpfValid: false,
            selectedType: null,
            user: props.data
        };
        this.showPass = this.showPass.bind(this);
        this.onChangeEmailUser = this.onChangeEmailUser.bind(this);
        this.onChangeNameUser = this.onChangeNameUser.bind(this);
        this.onChangePasswordUser = this.onChangePasswordUser.bind(this);
        this.onChangeCNPJlUser = this.onChangeCNPJlUser.bind(this);
        this.onChangeCPFStudentUser = this.onChangeCPFStudentUser.bind(this);
        this.onChangeCPFTeacherUser = this.onChangeCPFTeacherUser.bind(this);
        this.onChangeBusinessNameUser = this.onChangeBusinessNameUser.bind(this);
        this.onChangeHeightUser = this.onChangeHeightUser.bind(this);
        this.onChangeWeightUser = this.onChangeWeightUser.bind(this);
        this.setSelectedType = this.setSelectedType.bind(this);
    }

    setSelectedType = selectedType => LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true, userValid: this.state.userValid})
            : this.setState({showPass: true, press: false, userValid: this.state.userValid});
    }

    onChangeEmailUser(text) {
        const isValidEmail = (text) => EMAIL_VALID_REGEX.test(text);
        const state = {...this.state}
        state.user.email = text
        if (text) {
            state.emailValid = isValidEmail(text);
            if (state.emailValid) {
                this.props.data.email = text;
            }
        } else {
            state.emailValid = false;
        }
        this.setState(state);
    }

    onChangeNameUser(text) {
        this.state.user.update('name', () => text)
    }

    onChangePasswordUser(text) {
        const isValidPassword = (text) => PASSWORD_VALID_REGEX.test(text);
        this.state.user.gym.update('password', () => text)
        this.state.cnpjValid = isValidPassword(text)
    }

    onChangeCNPJlUser(text) {
        const isValidCNPJ = (text) => CNPJ_VALID_REGEX.test(text);
        this.state.user.gym.update('cnpj', () => text)
        this.state.cnpjValid = isValidCNPJ(text)
    }

    onChangeCPFStudentUser(text) {
        const isValidCPF = (text) => CPF_VALID_REGEX.test(text);
        this.state.user.student.update('cpf', () => text)
        this.state.cpfValid = isValidCPF(text)
    }

    onChangeCPFTeacherUser(text) {
        const isValidCPF = (text) => CPF_VALID_REGEX.test(text);
        this.state.user.teacher.update('cpf', () => text)
        this.state.cpfValid = isValidCPF(text)
    }

    onChangeBusinessNameUser(text) {
        this.state.user.gym.update('businessName', () => text)
    }

    onChangeHeightUser(text) {
        this.state.user.student.update('height', () => text)
    }

    onChangeWeightUser(text) {
        this.state.user.student.update('weight', () => text)
    }

    render() {
        const {
            selectedType,
        } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.signUpText}>Cadastre-se</Text>
                <Text style={styles.whoAreYouText}>Quem você é ?</Text>
                <View style={styles.userTypesContainer}>
                    <UserTypeItem
                        label="Academia"
                        labelColor="#ECC841"
                        image={USER_GYM}
                        onPress={() => this.setSelectedType('gym')}
                        selected={selectedType === 'gym'}
                    />
                    <UserTypeItem
                        label="Aluno"
                        labelColor="#FF5C62"
                        image={USER_STUDENT}
                        onPress={() => this.setSelectedType('student')}
                        selected={selectedType === 'student'}
                    />
                    <UserTypeItem
                        label="Professor"
                        labelColor="#2CA75E"
                        image={USER_TEACHER}
                        onPress={() => this.setSelectedType('teacher')}
                        selected={selectedType === 'teacher'}
                    />
                </View>
                <View style={styles.userDataContainer}>
                    <Input
                        sourceStart={NAME}
                        placeholder="Nome"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        value={this.state.user?.name}
                        onChangeText={this.onChangeNameUser}
                    />
                    <Input
                        sourceStart={this.state.emailValid? EMAIL_OUTLINE_CHECK : EMAIL_OUTLINE}
                        sourceEnd={this.state.emailValid? EMAIL_OUTLINE_CHECK : EMAIL_OUTLINE}
                        placeholder="E-mail"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        value={this.state.user?.email}
                        onChangeText={this.onChangeEmailUser}
                    />
                    <Input
                        sourceStart={this.state.showPass? PADLOCK_CLOSE : PADLOCK_OPEN }
                        secureTextEntry={this.state.showPass}
                        placeholder="Senha"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        value={this.state.user?.password}
                        onChangeText={this.onChangePasswordUser}
                        autoCorrect={false}
                        loading={true}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.btnEye}
                        onPress={this.showPass}>
                        <Image source={EYE_BLACK} style={styles.iconEye} />
                    </TouchableOpacity>
                    <If condition={ selectedType == 'gym' }>
                        <InputMask
                            maskType={'cnpj'}
                            sourceStart={ID}
                            placeholder="CNPJ"
                            value={this.state.user?.gym?.cnpj}
                            onChangeText={this.onChangeCNPJlUser}
                        />
                        <Input
                            sourceStart={BUSINESS}
                            placeholder="Razão Social"
                            value={this.state.user?.gym?.businessName}
                            onChangeText={this.onChangeBusinessNameUser}
                        />
                    </If>
                    <If condition={ selectedType == 'student' }>
                        <InputMask
                            maskType={'cpf'}
                            sourceStart={ID}
                            placeholder="CPF"
                            value={this.state.user?.student?.cpf}
                            onChangeText={this.onChangeCNPJlUser}
                        />
                        <InputMask
                            maskType={'custom'}
                            sourceStart={HEIGHT}
                            placeholder="Altura"
                            options={{ mask: '9,99 cm' }}
                            value={this.state.user?.student?.height}
                            onChangeText={this.onChangeHeightUser}
                        />
                        <InputMask
                            maskType={'custom'}
                            sourceStart={WEIGHT}
                            placeholder="Peso atual"
                            options={{ mask: '9,99 kg' }}
                            value={this.state.user?.student?.weight}
                            onChangeText={this.onChangeWeightUser}
                        />
                    </If>
                    <If condition={ selectedType == 'teacher' }>
                        <InputMask
                            maskType={'cpf'}
                            sourceStart={ID}
                            placeholder="CPF"
                            value={this.state.user?.teacher?.cpf}
                            onChangeText={this.onChangeCNPJlUser}
                        />
                    </If>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

Form.propTypes = {
    data: PropTypes.object.isRequired,
};


export const UserTypeItem = props => {
    const { image, label, labelColor, selected, ...attributes } = props;
    return (
        <TouchableOpacity {...attributes}>
            <View style={[styles.userTypeItemContainer, selected && styles.userTypeItemContainerSelected,]} >
                <Text style={[styles.userTypeLabel, { color: labelColor }]}>
                    {label}
                </Text>
                <Image source={image} style={[ styles.userTypeMugshot, selected && styles.userTypeMugshotSelected,]} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 111,
        right: 28,
    },
    iconEye: {
        width: 35,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    userTypeLabel: {
        color: 'yellow',
        fontFamily: 'Ubuntu-Bold',
        fontSize: 11,
    },

    signUpText: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Ubuntu-Light',
    },
    whoAreYouText: {
        color: '#7384B4',
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14,
    },
    userDataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    userTypesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH,
        alignItems: 'center',
        height: 130
    },

    userTypeItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    userTypeItemContainerSelected: {
        opacity: 1,
    },

    userTypeMugshot: {
        margin: 4,
        height: 70,
        width: 70,
    },
    userTypeMugshotSelected: {
        height: 100,
        width: 100,
    },
});
