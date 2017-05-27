(function (FMS, _) {
    _.extend( FMS, {
        validationStrings: {
            update: 'Vennligst legg inn en beskjed',
            title: 'Vennligst legg inn en tittel',
            detail: 'Vennligst legg in noen detaljer',
            name: {
                required: 'Vennligst legg inn navnet ditt',
                validName: 'Vennligst skriv inn ditt fulle navn, administrasjonene trenger denne informasjonen - hvis du ikke ønsker at navnet ditt skal vises på nettstedet, fjerner du avkryssingen under'
            },
            category: 'Vennligst velg en kategori',
            rznvy: {
                required: 'Vennligst legg inn e-post adressen din',
                email: 'Vennligst legg inn en gyldig e-post adresse'
            },
            email: {
                required: 'Vennligst legg inn e-post adressen din',
                email: 'Vennligst legg inn en gyldig e-post adresse'
            },
            password: 'Vennligst legg inn et passord'
        },
        strings: {
            next: 'Neste',
            untitled_draft: 'Utkast uten tittel',
            login_error: 'Det oppstod et problem under innloggingen. Vennligst prøv igjen senere.',
            logout_error: 'Det oppstod et problem under utloggingen. Vennligst prøv igjen senere.',
            login_details_error: 'Det oppsto et problem med å logge deg på. Vennligst sjekk e-postadressen og passordet ditt og at du har bekreftet passordet ditt.',
            password_problem: 'Det oppstod et problem med kombinasjonen av e-post / passord. Hvis du har glemt passordet ditt, eller ikke har et, kan du angi et ved å returnere til e-postskjermen og velge innstilt passord. Passordet blir ikke aktivert før du har klikket på lenken i bekreftelsesmeldingen.',
            search_placeholder: 'Søk etter en plass eller et postnummer',
            location_error: 'Posisjonsfeil',
            location_problem: 'Det oppstod et problem å slå opp posisjonen din.',
            multiple_locations: 'Mer enn ett sted matchet det navnet. Velg et nedenfor, eller prøv å skrive inn gatenavn og område, eller et postnummer.',
            sync_error: 'Det oppstod en feil ved innsending av rapporten: ',
            unknown_sync_error: 'Det oppstod et problem under innsendingen av rapporten. Vennligst prøv igjen senere.',
            report_send_error: 'Det oppstod et problem under innsendingen av rapporten. Vennligst prøv igjen.',
            missing_location: 'Vennlist legg inn en plassering',
            location_check_failed: 'Det oppsto et problem med å sjekke at vi dekker dette stedet. Prøv igjen senere.',
            category_extra_check_error: 'Det var et problem å sjekke om vi har alle detaljene vi trenger. Prøv igjen senere.',
            locate_dismissed: 'Vennligst søk etter et gate navn og område eller postnummer.',
            geolocation_failed: "Beklager, men vi kunne ikke finne sted nøyaktig nok til å vise deg et kart. Vennligst skriv inn et sted i søkeboksen i stedet",
            geolocation_denied: 'Kunne ikke få tilgang til plasseringstjenester. Vennligst sjekk tillatelser.',
            select_category: '-- Velg en kategori --',
            offline_got_position: 'Fant plasseringen.',
            offline_failed_position: 'Kunne ikke finne plassering.',
            required: 'påkrevd',
            invalid_email: 'Ugyldig e-post',
            invalid_report: 'Ugyldig rapport',
            photo_failed: 'Det oppstod et problem å ta bildet ditt.',
            photo_added: 'Bilde lagt til',
            photo_loading: 'Å laste opp bilder kan ta litt tid',
            upload_aborted: 'Det oppstod et problem under opplastingen av rapporten.',
            try_again: 'Prøv igjen',
            save_for_later: 'Lagre til senere',
            no_connection: 'Ingen nettverkstilkobling tilgjengelig for innlevering av rapporten. Prøv igjen senere.',
            more_details: 'Flere detaljer'
        }
    });
})(FMS, _);
