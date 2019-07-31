#!/bin/bash
fusion framework migrations up
fusion framework seeds run Database
npm run prod
