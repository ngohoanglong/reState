export const styleString = `/* Themes */
:root {
	--background: #f2f4f8;
	--primary: #b9e9ff;
	--primary-border: #a2e2ff;
	--text: #424242;
	--love-text: #d12026;
	--muted-text: #ccc;
	--context-text: #6597b2;
	--button: #0091d4;
	--card-background: #fff;
	--card-hover: rgba(220, 233, 255, 0.48);
	--table-separator: #dee2e6;
}
@media (prefers-color-scheme: dark) {
	:root {
		--background: #424242;
		--primary: #5b60ff;
		--primary-border: #4347b6;
		
		--text: #f2f4f8;
		--love-text: #00e4c6;
		--context-text: #8effb1;

		--button: var(--primary);

		--card-background: #5f5f5f;
		--card-hover: rgba(47, 47, 47, 0.76);
		--table-separator: #828282;
	}
}

/* Reset */
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  margin: 0;
  font-family: 'Montserrat', 'sans-serif';
  color: var(--text);
  overflow: hidden;
  background: var(--background);
}
.display {
  text-align: center;
  display: table;
  height: 100%;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.wrap {
  height:100%;
  display: table-cell;
  vertical-align: middle;
}
p {
  font-size: 100px; /* For lamers who don't support viewport sizing */
  font-size: 40vmin;
  text-align: center;
  margin: 0;
}
p.text-display {
  display: inline-block;
  color: var(--text);
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  margin: 20px auto;
  padding: 15px 20px;
  background: var(--card-background);
  border-radius: 5px;
  min-width: 24px;
  font-size: 26px;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
}

span.love {
  display: block;
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

span.love a {
  text-decoration: none;
  color: var(--love-text);
}

.twitter-follow-toggle-button {
  vertical-align: text-bottom;
}

.twitter-share-toggle-button {
  vertical-align: text-bottom;
}

/*
  Added New Card layout Css
*/
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 20px;
}
.card {
  background: var(--card-background);
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  flex: 1;
  max-width: calc(25% - 20px);
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.11);
}

.item-location .card-main {
  padding: 9.5px;
}

.item-location .main-description {
  font-size: 23px;
}

.item-location .main-description span {
  display: block;
}

.card:hover {
  cursor: pointer;
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--card-hover);
}

.card-header {
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid var(--primary-border);
  background-color: var(--primary);
  padding: 5px 10px;
  position: relative;
}

.more-info {
  height: 1.2em;
  width: 1.2em;
  float: right;
}

.more-info::before {
  content: '(?)';
  color: var(--context-text);
  display: inline-block;
}

.deprecated-link {
  position: absolute;
  top: 6px;
  right: 12px;
  color: var(--context-text);
  font-size: 10px;
}

.card-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.main-description {
  font-size: 28px;
  text-align: center;
  min-height: 35px;
}

.text-muted {
  font-size: 0.65em;
  color: var(--muted-text);
}

.table {
  width:100%;
  table-layout: fixed;
  margin: auto;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border-collapse: collapse;
}

.table-body {
  display: block;
  width: 100%;
  overflow: auto;
  background: var(--card-background);
}

.table thead tr {
  display: block;
  border-radius: 5px;
}

.table thead {
  font-weight: 600;
}

.table th,
.table td {
  padding: 0.3rem;
  text-align: left;

  font-size: 0.9rem;
}
.table th,
.table td:first-child{
 width:50px
}
.table th {
  padding: 0.3rem 0.6em;
}
.table td {
  border-bottom: 1px solid var(--table-separator);
}
.table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-toggle-button {
  font: bold 16px arial;
  position: absolute;
  top: 15px;
  right: 15px;
  color: var(--button);
  border: 2px solid var(--button);
  background: transparent;
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.table-toggle-button:hover {
  transform: translateY(-2px) scale(1.005) translateZ(0);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.11),
    0 6px 9px var(--card-hover);
}

.table-toggle-button:active {
  transform: translateY(2px) scale(0.995) translateZ(0);
  box-shadow: none;
}

.mobile-input input {
  opacity:0;
  width: calc(100% - 20px);
  height: 4rem;
  margin: 10px;
  font-size: 4rem;
  border: 1px solid #dadada;
  border-radius: 4px;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
}

.mobile-input input:focus {
  outline: none;
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--card-hover);
}

@media (min-width: 601px) and (max-width: 980px) {
  body {
    overflow-y: auto;
  }
  .card {
    flex: 45%;
    max-width: 45%;
  }
  .display {
    width: 80%;
  }
  .main-description {
    min-height: 34px;
  }
}
@media (max-width: 600px) {
  body {
    overflow-y: auto;
  }
  .card {
    flex: 100%;
    max-width: 100%;
  }
  .display {
    width: 90%;
  }
  .table {
    width: 100%;
  }
  .table-body {
  }
}

.hide {
  display: none !important;
}
.active {
  display: flex;
}`;
