
export const translateError = (error) => {
    switch (error) {
        case 'The resource owner or authorization server denied the request':
            return 'Seu e-mail ou senha podem estar incorretos...'
        default:
            return error

    }
}
