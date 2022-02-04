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
	IonTextarea,
	IonCardSubtitle,
	IonCardContent,
} from '@ionic/react';
import './Local.css';
import 'leaflet/dist/leaflet.css';

const Local: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Localisation</h1>
					</div>
					<iframe
						id='inlineFrameExample'
						title='Inline Frame Example'
						width='300'
						height='500'
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10115.417753516258!2d1.595358789395854!3d50.66696312048259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ddd33378c342fb%3A0xfe331071692e4dc5!2s%C3%89cault%2C%2062360%20Saint-%C3%89tienne-au-Mont!5e0!3m2!1sfr!2sfr!4v1643363967523!5m2!1sfr!2sfr"></iframe>
					<p className='P'>ADRESSE :18 rue des mouettes 62360 ECAULT</p>
					<div>
						<IonButton className='txt' color='dark'>
							Confirmer
						</IonButton>
					</div>
					<div>
						<a href='/addalert3'>
							<IonButton className='txt' color='dark'>
								Retour
							</IonButton>
						</a>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Local;
