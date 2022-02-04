import { IonContent, IonButton, IonPage, IonImg, IonToolbar } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>ALERTE CITOYEN</h1>
					</div>
					<a href='/'>
						<div className='D-alerte'>
							<IonImg className='alerte' src='./assets/alerte.png' />
						</div>{' '}
					</a>

					<a href='/login'>
						<IonButton className='But' color='dark' expand='block'>
							Se Connecter
						</IonButton>
					</a>
					<a href='/addalert'>
						<IonButton className='But' color='dark' expand='block'>
							Créer une Alerte
						</IonButton>
					</a>
					<a href='/list'>
						<IonButton className='But' color='dark' expand='block'>
							Voir Alerte
						</IonButton>
					</a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Page;
