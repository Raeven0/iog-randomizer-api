


import React from 'react'
import { observer } from 'mobx-react'
import { EnemizerForm, BossShuffleForm } from '../forms'

import AccordionPanel from './accordion-panel'
import { Grid } from '@material-ui/core';

const EnemizerContainer = observer(
    class EnemizerContainer extends React.Component {
        render() {
            return (
                <AccordionPanel title="Enemizer" id="enemizer">
                    <Grid container spacing={2}>
                        <Grid item xs={6}><EnemizerForm /></Grid>
                        <Grid item xs={6}><BossShuffleForm /></Grid>
                    </Grid>
                </AccordionPanel>
            )
        }
    }
)

export default EnemizerContainer