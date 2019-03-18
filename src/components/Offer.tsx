import {Component} from "react";
import React from "react";

interface IProps {
    visible: boolean;
}

class Offer extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="angebot" style={{display: display}}>
                <h2>Angebot</h2>

                <img src="gif/ringing-bell.gif"/>

                <article>
                    <h3>Produktentwicklung</h3>
                    <p>Sie wollen eine mobile oder webbasierte Anwendung umsetzen, die es nicht als
                        Standardlösung gibt? Wir
                        unterstützen Sie im gesamten Ablauf von der Ideenfindung bis zum fertigen Produkt. Wir
                        entwickeln
                        die
                        Software agil mit schnellen Feedbackzyklen. Wir sind die Spezialisten für Technik und
                        unterstützen
                        Entscheidungen konstruktiv mit kritischen Fragen und brillanten Lösungsideen. Lean
                        Startup oder
                        Scrum?
                        Beides! Wenn aus einem MVP ein erfolgreiches Produkt entsteht, können wir skalieren. Wir
                        liefern ein
                        qualitativ hochwertiges, betriebsfertiges Produkt in der Cloud und stehen für Pflege und
                        kontinuierliche
                        Weiterentwicklung bereit.</p>
                </article>

                <img src="gif/hacking-computer-nerd.gif"/>

                <article>
                    <h3>Digitalisierung</h3>
                    <p>Sie wollen effizienter und moderner werden, neue Potentiale durch Integration bestehender
                        Dienste,
                        Einsatz von künstlicher Intelligenz und komplexer Automatisierung ausschöpfen? Wir
                        unterstützen Sie,
                        indem wir Geschäftsmodelle, Daten und Anforderungen analysieren und diese logisch und
                        technisch
                        hinterfragen. Dabei sind wir konstruktiv und liefern exzellente Lösungsvorschläge. Nach
                        der Analyse
                        entwickeln wir Services oder ganze Systeme. Wir treiben den Prozess bis zur fertigen
                        Lösung und
                        lassen unsere Kunden auch im Betrieb nicht allein. Dabei entwickeln wir agil und
                        arbeiten zum
                        Festpreis.</p>
                </article>

                <img src="gif/computer-using-itself.gif"/>

                <article>
                    <h3>Consulting</h3>
                    <p>Sie benötigen externe Ressourcen, wollen etwas verändern oder benötigen Rat von Experten?
                        Wir
                        übernehmen
                        Entwicklungsarbeiten oder beraten Sie in Fragen der Architektur und der Methodik. Unsere
                        erfahrenen
                        Mitarbeiter bringen dabei immer ein agiles Mindset mit, arbeiten praxisorientiert und
                        schaffen
                        Werte:
                        Vor Ort (nur Hamburg oder Bonn) mit hochqualifizierten Fachkräften in der
                        Software-Entwicklung oder
                        der
                        Analyse von Geschäftsprozessen und Daten. So werden Sie in Ihren Prozessen agiler,
                        schneller und
                        erreichen eine höhere Qualität.</p>
                </article>

                <img src="gif/business-people-talking.gif"/>

                <article>
                    <h3>Pflege und Wartung</h3>
                    <p>Sie suchen einen zuverlässigen Partner, der Ihre Systeme pflegt und wartet?
                        Selbstverständlich
                        übernehmen wir die Pflege für die Lösungen, die wir gebaut haben, sowie für bestehende
                        Java-Systeme.
                        Bei
                        Software, die wir entwickelt haben, können wir dank des agilen Vorgehens und den
                        automatisierten
                        Tests
                        auch später kleine und große Änderungen und Erweiterungen an der Software preiswert
                        durchführen. So
                        können Sie die Software lange weiter nutzen und dabei Sicherheitsanforderungen und
                        gesetzliche
                        Vorgaben
                        erfüllen.</p>
                </article>

                <img src="gif/bouncing-computer-station.gif"/>

                <article>
                    <h3>Unsere Systeme</h3>
                    <ul>
                        <li>sind 24/7 verfügbar</li>
                        <li>werden von großen Unternehmen europaweit eingesetzt</li>
                        <li>verarbeiten mehrere Millionen Aufrufe am Tag</li>
                        <li>bearbeiten Kundendaten von über 50 Millionen Kunden</li>
                        <li>werden kontinuierlich integriert und getestet</li>
                        <li>haben tausende Benutzer</li>
                        <li>werden ständig weiterentwickelt, und das seit über zehn Jahren</li>
                        <li>haben Altsysteme abgelöst</li>
                        <li>sind vor allem Back-End-Systeme, haben aber auch Front-End Anteile</li>
                    </ul>
                </article>

                <img src="gif/fire-burning-hot-text.gif"/>

                <article>
                    <h3>Unsere Werkzeuge</h3>
                    <dl>
                        <dt>Java</dt>
                        <dd>"Der Standard für performante und stabile Serversoftware."</dd>
                        <dt>Spring</dt>
                        <dd>"Hat Dependency Injection im Java Enterprise Umfeld verbreitet und durchgesetzt. JEE
                            und der
                            anderen Konkurrenz immer einen Schritt voraus."
                        </dd>
                        <dt>Hibernate</dt>
                        <dd>"JPA als Standard, Hibernate als Implementierung – die etablierteste Lösung."</dd>
                        <dt>Jenkins</dt>
                        <dd>"Der Standard für Open Source Continuous Integration."</dd>
                        <dt>Git</dt>
                        <dd>"Über 65 Millionen GitHub Repositories und 24 Millionen registrierte Developer
                            sprechen für
                            sich."
                        </dd>
                        <dt>SonarQube</dt>
                        <dd>"Das Data-Warehouse für Softwareentwicklung. Sahnehäubchen für Jenkins."</dd>
                        <dt>Gradle</dt>
                        <dd>"Das beste Java Build Tool. Schnellstes Feedback durch inkrementelle und parallele
                            Builds.
                            Essentiell für Continous Integration."
                        </dd>
                        <dt>Docker</dt>
                        <dd>"In einem Container funktioniert Software auf allen Geräten gleich."</dd>
                        <dt>Kubernetes</dt>
                        <dd>"Automatisierte Skalierung und Orchestrierung von Containern."</dd>
                        <dt>aws</dt>
                        <dd>"Global produktiv sein - und das innerhalb von Minuten."</dd>
                        <dt>TypeScript</dt>
                        <dd>"Alle Vorteile ohne die Nachteile von Javascript."</dd>
                        <dt>Cucumber</dt>
                        <dd>"Das BDD-Tool, mit dem man Spezifikation und Testdokumentation kombiniert."</dd>
                    </dl>
                </article>

                <img src="gif/valentine-hearts.gif"/>

            </section>
        );
    }
}

export default Offer;
