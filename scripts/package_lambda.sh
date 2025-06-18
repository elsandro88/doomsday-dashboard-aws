#!/bin/bash
rm -rf build
mkdir -p build/etl_co2
pip install -r requirements.txt -t build/etl_co2
cp etl/etl_co2.py build/etl_co2/
zip -j build/etl_co2.zip build/etl_co2/*
# Ripeti per gli altri ETL: etl_temperature, etl_carbon_intensity
