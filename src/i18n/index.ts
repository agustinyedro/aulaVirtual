import spanish from '../i18n/es.json';


const LANG = {
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	
	return spanish;
};