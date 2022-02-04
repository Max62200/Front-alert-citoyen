import {
	IonContent,
	IonList,
	IonCardTitle,
	IonButton,
	IonPage,
	IonCard,
	IonItem,
	IonLabel,
	IonInput,
	IonCardHeader,
	IonCardSubtitle,
	IonCardContent,
} from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Login</h1>
					</div>
					<IonCard>
						<IonList className='col'>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Email :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem className='ca-col'>
								<IonLabel className='txt'>Mot de Passe :</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonButton className='txt2' color='light'>
								Connexion
							</IonButton>
						</IonList>
					</IonCard>
                    <a href='/page'>
					<IonButton color='dark'>
						Retour
					</IonButton>
                    </a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Login;
