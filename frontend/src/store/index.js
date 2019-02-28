/**
* @version		$Id: config.inc 1.0 2016 $
* @package		Uniprime
* @subpackage	View
* @copyright	Copyright (C) 2016 Planilhas Online. All rights reserved.
* @license		Commercial
* @author     	Alexandre Oliveira de Albuquerque
* @jesus		Maravilhoso é o Senhor!
*/
define(function(){
	
	var credentials = Cookies.getJSON("appGestorDeMetas") || {};
	var tarefasDiarias = Cookies.getJSON("td"+credentials.login) || null;
	var numero_posto = credentials.posto;
	var usuario_gerente = credentials.usuario_gerente;
	var nome_usuario = credentials.login;
	var tipo_filtro = "Gerente: "+usuario_gerente;
	var dadosVazio =[]
	var lista=[]
	var idlayout = "idlayout"+Math.random();
	var dataset_siage 	= "server/gestao_metas/siage_analise_gerencial.php";


	Vue.component("my-slider", {
		props: ['teste_propos'],
		template:`
		<v-content>
		{{teste_propos}}
		<div id="app">
		<h2>Titulo: {{title}}</h2>

		<button v-if="!show" @click="show=true,boostrap=false, title='Vuetfy'" >Veja em Vuetfy</button>

		<v-btn v-else @click="show=false,boostrap=false " color="blue" style="color:white;">Voltar</v-btn>

		<v-btn color="blue" style="color:white;">SIAGE GRID</v-btn>

		<div v-if="show==false ? title='Pagina Inicial':'' ">

		<v-text-field v-model="size" append-icon="search"  label="Digite um texto e veja Magica"></v-text-field>


		<div>
		<table style="width:100%;border-spacing: 2px">

		<tr style="background-color:#004C6C; height:35px;color:white">
		<th style="text-align:center; width:57.1%">ANALISE GERENCIAL DA UNIPRIME CONSOLIDADO</th>
		<th style="text-align:center;">MÊS 01/2019</th>
		</tr>
		</table>
		</div>


		<div>
		<table style="width:100%;border-spacing: 2px;font-size:12px;">

		<tr style="background-color:#004C6C; height:35px;color:white">
		<th colspan="7" style="width:5%; text-align:center;">I</th>
		<th colspan="22" style="width:15%;text-align:center;">RECURSOS</th>
		<th colspan="2" style="width:10%;text-align:center;">MÊS ATUAL</th>
		<th colspan="0" style="width:10%;text-align:center;">MÊS ANTERIOR</th>
		<th colspan="0" style="width:10%;text-align:center;">ANO ANTERIOR</th>
		<th colspan="2" style="width:10%;text-align:center;">% MÊS</th>
		<th colspan="2" style="width:10%;text-align:center;"">% ANO</th>
		</tr>

		<tr  v-for="xupim in dadosRecursos">
		<td colspan="7" style="padding:10px; background-color:#d7e9f7; text-align:right;"></td>
		<td colspan="22" style="padding:5px; height:35px;text-align:left;">{{xupim.Descricao}}</td>
		<td colspan="2" style=" background-color:#d7e9f7; padding:5px;text-align:left;">{{xupim.Saldo}}</td>
		<td colspan="1" style="padding:5px; text-align:right;">{{xupim.Saldo_Anterior}}</td>
		<td colspan="0" style="padding:5px; background-color:#d7e9f7;text-align:right;" ></td>
		<td colspan="2" style="padding:5px;text-align:right;">{{xupim.vlrMes}}</td>
		<td colspan="2" style="padding:5px;  background-color:#d7e9f7;  text-align:right;"></td>
		</tr>
		</table>
		</div>

		<div>
		<table style="width:100%;border-spacing: 2px;font-size:12px;">

		<tr style="background-color:#004C6C; height:35px;color:white">
		<th colspan="7" style="width:5%;text-align:center;">I</th>
		<th colspan="22" style="width:15%;text-align:center;">APLICAÇÕES</th>
		<th colspan="2" style="width:10%; text-align:center;">MÊS ATUAL</th>
		<th colspan="0  " style="width:10%; text-align:center;">MÊS ANTERIOR</th>
		<th colspan="0" style="width:10%; text-align:center;">ANO ANTERIOR</th>
		<th colspan="2" style="width:10%; text-align:center;">% MÊS</th>
		<th colspan="2" style="width:10%; text-align:center;"">% ANO</th>
		</tr>

		<tr  v-for="xupim in dadosAplicacoes">
		<td colspan="7" style="padding:10px; background-color:#d7e9f7; text-align:right;"></td>
		<td colspan="22" style="padding:5px; height:35px;text-align:left;">{{xupim.Descricao}}</td>
		<td colspan="2" style=" background-color:#d7e9f7; padding:5px;text-align:left;">{{xupim.Saldo}}</td>
		<td colspan="1" style="padding:5px; text-align:right;">{{xupim.Saldo_Anterior}}</td>
		<td colspan="0" style="padding:5px; background-color:#d7e9f7; text-align:right;" >{{xupim.vlrMes}}</td>
		<td colspan="2" style="padding:5px;  text-align:right;"></td>
		<td colspan="2" style="padding:5px;background-color:#d7e9f7; text-align:right;"></td>
		</tr>
		</table>
		</div>


		<div>
		<table style="width:100%;border-spacing: 2px;font-size:12px;">

		<tr style="background-color:#004C6C; height:35px;color:white">
		<th colspan="7" style="width:5%; text-align:center;">I</th>
		<th colspan="22" style="width:15.0%; text-align:center;">DEMOSNTRAÇÃO DE RESULTADO</th>
		<th colspan="2" style="width:10%; text-align:center;">MÊS ATUAL</th>
		<th colspan="0" style="width:10%; text-align:center;">MÊS ANTERIOR</th>
		<th colspan="0" style="width:10%; text-align:center;">ANO ANTERIOR</th>
		<th colspan="2" style="width:10%; text-align:center;">% MÊS</th>
		<th colspan="2" style="width:10%; text-align:center;"">% ANO</th>
		</tr>

		<tr v-for="xupim in dadosResultado">
		<td colspan="7" style="padding:10px; background-color:#d7e9f7; text-align:right;"></td>
		<td colspan="22" style="padding:5px; height:35px;text-align:left;">{{xupim.Descricao}}</td>
		<td colspan="2" style=" background-color:#d7e9f7; padding:5px;text-align:left;">{{xupim.Saldo}}</td>
		<td colspan="1" style="padding:5px; text-align:right;">{{xupim.Saldo_Anterior}}</td>
		<td colspan="0" style="padding:5px; background-color:#d7e9f7; text-align:right;" >{{xupim.vlrMes}}</td>
		<td colspan="2" style="padding:5px; text-align:right;"></td>
		<td colspan="2" style="padding:5px; background-color:#d7e9f7; text-align:right;"></td>
		</tr>
		</table>
		</div>

		<div>
		<table style="width:100%;border-spacing: 2px;font-size:12px;">

		<tr style="background-color:#004C6C; height:35px;color:white">
		<th colspan="7" style="width:5%; text-align:center;">I</th>
		<th colspan="22" style="width:15.0%; text-align:center;">OUTRAS INFORMAÇÕES</th>
		<th colspan="2" style="width:10%; text-align:center;">MÊS ATUAL</th>
		<th colspan="0" style="width:10%; text-align:center;">MÊS ANTERIOR</th>
		<th colspan="0" style="width:10%; text-align:center;">ANO ANTERIOR</th>
		<th colspan="2" style="width:10%; text-align:center;">% MÊS</th>
		<th colspan="2" style="width:10%; text-align:center;"">% ANO</th>
		</tr>

		<tr v-for="xupim in dadosInformacoes">
		<td colspan="7" style="padding:10px; background-color:#d7e9f7; text-align:right;"></td>
		<td colspan="22" style="padding:5px; height:35px;text-align:left;">{{xupim.Descricao}}</td>
		<td colspan="2" style=" background-color:#d7e9f7; padding:5px;text-align:left;">{{xupim.Saldo}}</td>
		<td colspan="1" style="padding:5px;  text-align:right;">{{xupim.Saldo_Anterior}}</td>
		<td colspan="0" style="padding:5px; background-color:#d7e9f7; text-align:right;" >{{xupim.vlrMes}}</td>
		<td colspan="2" style="padding:5px;  text-align:right;"></td>
		<td colspan="2" style="padding:5px; background-color:#d7e9f7; text-align:right;"></td>
		</tr>
		</table>
		</div>


		</div>

		<div  v-if="show">
		<template>

		<v-text-field
		v-model="search"
		append-icon="search"
		label="Search"
		single-line
		hide-details
		></v-text-field>

		<v-data-table
		:headers="headers"
		:items="dadosAplicacoes"
		class="elevation-1"
		:search="search"
		>
		<template slot="items" slot-scope="props">
		<td class="text-xs-right">{{ props.item.id  }}</td>
		<td class="text-xs-right">{{ props.item.value  }}</td>
		<td class="text-xs-right">{{ props.item.size  }}</td>
		<td class="text-xs-right">{{ props.item.ano  }}</td>
		<td class="text-xs-right">{{ props.item.mes  }}</td>
		<td class="text-xs-right">{{ props.item.perceteMes  }}</td>
		<td class="text-xs-right">{{ props.item.perceteAno  }}</td>
		</template>

		</v-data-table>
		</template>
		</div>  	
		</div>
		</v-layout>
		`,
		data:function(){
			return{
				size:"",
				title:"",
				search: "",
				dadosInformacoes:[],
				dadosRecursos:[],
				dadosAplicacoes:[],
				dadosResultado:[],
				show:false,
				headers: [
				{
					text: 'ID',
					align: 'right',
					sortable: false,
					value: 'id'
				},
				{ text: 'Depósitos a vista', align: 'right', value: 'value' },
				{ text: 'ano', align: 'right', value: 'ano' },
				{ text: 'mes', align: 'right', value: 'mes' },
				{ text: 'perceteMes', align: 'right', value: 'perceteMes' },
				{ text: 'perceteAno', align: 'right', value: 'perceteAno' },
				{ text: 'perceteAno',  align: 'right', value: 'perceteAno' },,
				],
				desserts: [
				{
					name: 'Frozen Yogurt',
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: '1%'
				},
				{
					name: 'Ice cream sandwich',
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: '1%'
				},
				{
					name: 'Eclair',
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: '7%'
				},
				{
					name: 'Cupcake',
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: '8%'
				},
				{
					name: 'Gingerbread',
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: '16%'
				},
				{
					name: 'Jelly bean',
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: '0%'
				},
				{
					name: 'Lollipop',
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: '2%'
				},
				{
					name: 'Honeycomb',
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: '45%'
				},
				{
					name: 'Donut',
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: '22%'
				},
				{
					name: 'KitKat',
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: '6%'
				}
				]
			}
		},
		watch:{
		    // updates component when the bound value changes
		    value:{
		    	handler:function(value){
		    		webix.$$(this.webixId).setValue(value);
		    	}
		    }
		},
		mounted:async function(){
			console.log('teste')

			this.dadosRecursos = (await axios.get(dataset_siage+'?data=11%2F2018&posto=10&idsiage_grupo=Recursos')).data
			this.dadosAplicacoes = (await axios.get(dataset_siage+'?data=11%2F2018&posto=10&idsiage_grupo=Aplica%C3%A7%C3%B5es')).data
			this.dadosResultado = (await axios.get(dataset_siage+'?data=11%2F2018&posto=10&idsiage_grupo=Demonstra%C3%A7%C3%A3o%20do%20Resultado')).data
			this.dadosInformacoes = (await axios.get(dataset_siage+'?data=11%2F2018&posto=10&idsiage_grupo=Outras%20Informa%C3%A7%C3%B5es')).data

		},
		  // memory cleaning
		  destroyed:function(){
		  	webix.$$(this.webixId).destructor();
		  }
		});

	var preview = {
		view:"vue",
		scroll:"y", 
		template:`
		<my-slider :teste_propos='teste_propos'/>
		`,
		data:function(){
			return{
				teste_propos:'testando props'
			}
		},
	}

	return {
		$ui: preview ,
		$menu:"menuBar",

		$oninit: function (view, scope) {
			webix.extend($$("layoutGerente"), webix.ProgressBar);

		},
	};

});

