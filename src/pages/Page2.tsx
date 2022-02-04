import { IonContent, IonButton, IonPage, IonImg, IonToolbar } from '@ionic/react';
import './Page2.css';

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

					<a href='/list2'>
						<IonButton className='But' color='dark' expand='block'>
							Gérer Alerte
						</IonButton>
					</a>
					<a href='/page'>
						<IonButton className='But' color='dark' >
							Retour
						</IonButton>
					</a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Page;
