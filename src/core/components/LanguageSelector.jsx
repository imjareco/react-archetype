import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import { useTranslations, changeLanguage } from 'core/i18n';

export const LanguageSelector = () =>  {
    const { t } = useTranslations();
    const [toggle, setToggle] = useState(false);

    const handleChange = ({ target }) => {
        const { checked } = target;
        setToggle(checked);
        changeLanguage(checked ? 'es' : 'en');
    };

    return(
        <Box mt={'3px'}>
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                    <Typography>{t('core.lang.english')}</Typography>
                </Grid>
                <Grid item>
                    <Switch
                        size='small'
                        color="default"
                        checked={toggle}
                        onChange={handleChange}
                        value="checked" 
                    />
                </Grid>
                <Grid item>
                <Typography>{t('core.lang.spanish')}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
