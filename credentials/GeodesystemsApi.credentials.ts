import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GeodesystemsApi implements ICredentialType {
        name = 'N8nDevGeodesystemsApi';

        displayName = 'Geodesystems API';

        icon: Icon = { light: 'file:../nodes/Geodesystems/geodesystems.png', dark: 'file:../nodes/Geodesystems/geodesystems.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://geodesystems.com:443/',
                        required: true,
                        placeholder: 'https://geodesystems.com:443/',
                        description: 'The base URL of your Geodesystems API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
