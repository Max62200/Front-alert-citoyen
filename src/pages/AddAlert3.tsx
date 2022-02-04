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
import './AddAlert3.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const AddAlert3: React.FC = () => {
	const { takePhoto } = usePhotoGallery();

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='container'>
					<div className='H2'>
						<h1 className='h2'>Créer une Alerte</h1>
					</div>
					<div className='BG2'>
						<div>
							<a href='/local'>
								<IonButton color='light' className='size'>
									Localisation
								</IonButton>
							</a>
						</div>
						<div>
							<IonButton color='light' onClick={() => takePhoto()} className='size'>
								Photo / Video
							</IonButton>
						</div>
						<div>
							<IonButton className='size2' color='light'>
								Confirmer
							</IonButton>
						</div>
					</div>
					<a href='/addalert2'>
						<IonButton color='dark'>
							Retour
						</IonButton>
					</a>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default AddAlert3;
