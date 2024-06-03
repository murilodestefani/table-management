import { initializeApp } from "firebase/app"; // Importa a função para inicializar o Firebase
import { getAuth } from "firebase/auth"; // Importa a função para obter o serviço de autenticação do Firebase
import { getFirestore } from "firebase/firestore"; // Importa a função para obter o serviço de Firestore do Firebase

// Configuração do Firebase contendo as credenciais do projeto
const firebaseConfig = {
  apiKey: "AIzaSyCDwDNJeqB7reGVPcTT1LIpiVyxJSR4spI", // Chave de API do Firebase
  authDomain: "table-management-6e4e2.firebaseapp.com", // Domínio de autenticação do Firebase
  projectId: "table-management-6e4e2", // ID do projeto no Firebase
  storageBucket: "table-management-6e4e2.appspot.com", // Storage bucket do Firebase
  messagingSenderId: "894925338582", // ID do remetente de mensagens do Firebase
  appId: "1:894925338582:web:6348fc64f83c5b87ce1677", // ID da aplicação do Firebase
};

// Inicializa o Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);
// Obtém o serviço de autenticação do Firebase
const auth = getAuth(app);
// Obtém o serviço de Firestore do Firebase
const db = getFirestore(app);
// Exporta os serviços de autenticação e Firestore para uso em outras partes da aplicação
export { auth, db };
