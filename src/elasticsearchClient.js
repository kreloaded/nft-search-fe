import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: 'http://localhost:9200', // Use HTTPS if Elasticsearch is configured with SSL
});

export default client;
