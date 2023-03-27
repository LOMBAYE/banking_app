import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'demoreact',
    clientId: 'bankapp'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;